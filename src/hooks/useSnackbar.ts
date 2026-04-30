import { useState, useCallback, useEffect, useRef } from "react";

export type SnackbarSeverity = "success" | "error" | "warning" | "info";

export interface SnackbarMessage {
  id: string;
  message: string;
  severity: SnackbarSeverity;
  duration: number;
}

export interface UseSnackbarReturn {
  messages: SnackbarMessage[];
  show: (message: string, severity?: SnackbarSeverity, duration?: number) => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

let _counter = 0;
function uid(): string {
  return `snackbar-${++_counter}-${Date.now()}`;
}

/**
 * Manage a queue of toast/snackbar notifications.
 *
 * @example
 * ```tsx
 * const { messages, show } = useSnackbar();
 * show("Saved!", "success");
 * ```
 */
export function useSnackbar(maxMessages = 5): UseSnackbarReturn {
  const [messages, setMessages] = useState<SnackbarMessage[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    const t = timers.current.get(id);
    if (t) {
      clearTimeout(t);
      timers.current.delete(id);
    }
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const show = useCallback(
    (message: string, severity: SnackbarSeverity = "info", duration = 4000) => {
      const id = uid();
      setMessages((prev) => {
        const next = [...prev, { id, message, severity, duration }];
        return next.slice(-maxMessages);
      });
      if (duration > 0) {
        const t = setTimeout(() => dismiss(id), duration);
        timers.current.set(id, t);
      }
    },
    [dismiss, maxMessages],
  );

  const dismissAll = useCallback(() => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current.clear();
    setMessages([]);
  }, []);

  useEffect(() => {
    const map = timers.current;
    return () => {
      map.forEach((t) => clearTimeout(t));
      map.clear();
    };
  }, []);

  return { messages, show, dismiss, dismissAll };
}
