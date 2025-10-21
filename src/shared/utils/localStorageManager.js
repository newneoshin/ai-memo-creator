const localStorageManager = (() => {
  function encode(value) {
    const t = typeof value;

    if (value === null || t === "string" || t === "number" || t === "boolean") {
      return { t, v: value };
    }

    if (t === "bigint") {
      return { t: "bigint", v: value.toString() };
    }

    if (value instanceof Date) {
      return { t: "date", v: value.toISOString() };
    }

    if (t === "object") {
      return { t: "json", v: value };
    }

    throw new Error(`Unsupported type: ${t}`);
  }

  function decode(raw) {
    if (raw == null) return null;

    try {
      const parsed = JSON.parse(raw);
      if (!parsed) {
        return parsed;
      }

      switch (parsed.t) {
        case "string":
        case "number":
        case "boolean":
          return parsed.v;
        case "bigint":
          return BigInt(parsed.v);
        case "date":
          return new Date(parsed.v);
        case "json":
          return parsed.v;
        default:
          return parsed.v;
      }
    } catch {
      return raw;
    }
  }

  return {
    getItem(key, fallback = null) {
      const raw = localStorage.getItem(key);
      const value = decode(raw);
      return value === undefined || value === null ? fallback : value;
    },

    setItem(key, value) {
      const t = typeof value;
      if (t === "function" || t === "symbol" || t === "undefined") {
        throw new Error(`Unsupported type for localStorage`);
      }

      const payload = encode(value);
      localStorage.setItem(key, JSON.stringify(payload));
    },

    removeItem(key) {
      localStorage.removeItem(key);
    },

    getItemWithMapper(key, mapper) {
      const raw = localStorage.getItem(key);
      return mapper(raw);
    },
  };
})();

export default localStorageManager;
