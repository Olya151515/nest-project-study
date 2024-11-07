"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformerHelper = void 0;
class TransformerHelper {
    static toLowerCase({ value }) {
        return value ? value.toString().toLowerCase() : value;
    }
    static trim({ value }) {
        return value ? value.toString().trim() : value;
    }
    static trimArray({ value }) {
        return Array.isArray(value) ? value.map((item) => item.trim()) : value;
    }
    static uniqueItems({ value }) {
        return value ? Array.from(new Set(value)) : value;
    }
    static toLowerCaseArray({ value }) {
        return Array.isArray(value)
            ? value.map((item) => item.toLowerCase())
            : value;
    }
}
exports.TransformerHelper = TransformerHelper;
//# sourceMappingURL=transformer.helper.js.map