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
/**
 * Manage a queue of toast/snackbar notifications.
 *
 * @example
 * ```tsx
 * const { messages, show } = useSnackbar();
 * show("Saved!", "success");
 * ```
 */
export declare function useSnackbar(maxMessages?: number): UseSnackbarReturn;
