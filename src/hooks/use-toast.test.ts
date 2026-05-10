import { describe, expect, test } from "bun:test";
import { reducer, toast } from "./use-toast";

describe("toast reducer", () => {
  test("ADD_TOAST adds a toast", () => {
    const state = { toasts: [] };
    const newToast = {
      id: "1",
      title: "Hello",
      open: true,
      onOpenChange: () => {},
    };
    const result = reducer(state, { type: "ADD_TOAST", toast: newToast });
    expect(result.toasts).toHaveLength(1);
    expect(result.toasts[0]?.title).toBe("Hello");
  });

  test("ADD_TOAST enforces limit of 1", () => {
    const state = {
      toasts: [{ id: "1", title: "First", open: true, onOpenChange: () => {} }],
    };
    const newToast = {
      id: "2",
      title: "Second",
      open: true,
      onOpenChange: () => {},
    };
    const result = reducer(state, { type: "ADD_TOAST", toast: newToast });
    expect(result.toasts).toHaveLength(1);
    expect(result.toasts[0].title).toBe("Second");
  });

  test("UPDATE_TOAST updates existing toast", () => {
    const state = {
      toasts: [{ id: "1", title: "Old", open: true, onOpenChange: () => {} }],
    };
    const result = reducer(state, {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "New" },
    });
    expect(result.toasts[0]?.title).toBe("New");
  });

  test("DISMISS_TOAST sets open to false", () => {
    const state = {
      toasts: [{ id: "1", title: "Test", open: true, onOpenChange: () => {} }],
    };
    const result = reducer(state, { type: "DISMISS_TOAST", toastId: "1" });
    expect(result.toasts[0]?.open).toBe(false);
  });

  test("DISMISS_TOAST without id dismisses all", () => {
    const state = {
      toasts: [
        { id: "1", title: "A", open: true, onOpenChange: () => {} },
        { id: "2", title: "B", open: true, onOpenChange: () => {} },
      ],
    };
    const result = reducer(state, { type: "DISMISS_TOAST" });
    expect(result.toasts.every((t) => t.open === false)).toBe(true);
  });

  test("REMOVE_TOAST removes by id", () => {
    const state = {
      toasts: [{ id: "1", title: "A", open: true, onOpenChange: () => {} }],
    };
    const result = reducer(state, { type: "REMOVE_TOAST", toastId: "1" });
    expect(result.toasts).toHaveLength(0);
  });

  test("REMOVE_TOAST without id clears all", () => {
    const state = {
      toasts: [
        { id: "1", title: "A", open: true, onOpenChange: () => {} },
        { id: "2", title: "B", open: true, onOpenChange: () => {} },
      ],
    };
    const result = reducer(state, { type: "REMOVE_TOAST" });
    expect(result.toasts).toHaveLength(0);
  });
});

describe("toast() API", () => {
  test("returns id, dismiss, and update", () => {
    const result = toast({ title: "Test" });
    expect(typeof result.id).toBe("string");
    expect(typeof result.dismiss).toBe("function");
    expect(typeof result.update).toBe("function");
  });
});
