/**
 * IndexedDB persistence for the md3-wallpaper skin.
 *
 * localStorage stores only the compact Monaco state (512px JPEG for source
 * extraction + token sets). The full-resolution wallpaper (raw upload and the
 * recolored result) are blobs that must live in IndexedDB — localStorage
 * cannot hold multi-MB base64 within its ~5MB quota. This module provides
 * promise-based put/get/delete over a single object store, versioned so a
 * schema bump does not collide with older data.
 *
 * Everything degrades gracefully: if IndexedDB is unavailable (private mode,
 * sandboxed iframe, jsdom), operations resolve to a safe no-op / null instead
 * of throwing.
 */

/** Database + object-store names (single store for both flavours). */
export const DB_NAME = "dsh.md3Wallpaper.store";
export const STORE_NAME = "blobs";
export const DB_VERSION = 1;

/** Key for the raw uploaded blob. */
export const KEY_RAW = "raw";
/** Key for the recolored (Monet-unified) blob. */
export const KEY_RECOLORED = "recolored";

/** A small promise wrapper over the IndexedDB request/transaction events. */
function openDb(): Promise<IDBDatabase | null> {
	if (typeof indexedDB === "undefined") return Promise.resolve(null);
	return new Promise((resolve) => {
		let req: IDBOpenDBRequest;
		try {
			req = indexedDB.open(DB_NAME, DB_VERSION);
		} catch {
			resolve(null);
			return;
		}
		req.onupgradeneeded = (event) => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME);
			}
			void event;
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => resolve(null);
	});
}

/** Put a blob under a key. Resolves true on success. */
export async function putBlob(key: string, blob: Blob): Promise<boolean> {
	const db = await openDb();
	if (!db) return false;
	try {
		await new Promise<void>((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, "readwrite");
			tx.objectStore(STORE_NAME).put(blob, key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
			tx.onabort = () => reject(tx.error);
		});
		return true;
	} catch {
		return false;
	} finally {
		db.close();
	}
}

/** Get a blob under a key. Returns null when missing or unavailable. */
export async function getBlob(key: string): Promise<Blob | null> {
	const db = await openDb();
	if (!db) return null;
	try {
		return await new Promise<Blob | null>((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, "readonly");
			const req = tx.objectStore(STORE_NAME).get(key);
			req.onsuccess = () => resolve((req.result as Blob | undefined) ?? null);
			req.onerror = () => reject(req.error);
			tx.oncomplete = () => resolve(null);
		});
	} catch {
		return null;
	} finally {
		db.close();
	}
}

/** Delete a blob under a key. Resolves true when no longer present. */
export async function deleteBlob(key: string): Promise<boolean> {
	const db = await openDb();
	if (!db) return false;
	try {
		await new Promise<void>((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, "readwrite");
			tx.objectStore(STORE_NAME).delete(key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
			tx.onabort = () => reject(tx.error);
		});
		return true;
	} catch {
		return false;
	} finally {
		db.close();
	}
}

/** Create a local object URL for a blob (revoked by the caller on dispose). */
export function objectUrlFor(blob: Blob): string {
	if (typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
		return "";
	}
	return URL.createObjectURL(blob);
}
