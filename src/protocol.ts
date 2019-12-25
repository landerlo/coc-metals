import {
  ExecuteCommandParams,
  NotificationType,
  RequestType
} from "vscode-languageserver-protocol";

export namespace ExecuteClientCommand {
  export const type = new NotificationType<ExecuteCommandParams, void>(
    "metals/executeClientCommand"
  );
}

// TODO not implimented
export namespace MetalsStatus {
  export const type = new NotificationType<MetalsStatusParams, void>(
    "metals/status"
  );
}

// TODO not implimented
export namespace MetalsSlowTask {
  export const type = new RequestType<
    MetalsSlowTaskParams,
    MetalsSlowTaskResult,
    void,
    void
  >("metals/slowTask");
}

export namespace MetalsInputBox {
  export const type = new RequestType<
    InputBoxOptions,
    MetalsInputBoxResult,
    void,
    void
  >("metals/inputBox");
}

export interface MetalsSlowTaskParams {
  message: string;
  quietLogs?: boolean;
  secondsElapsed?: number;
}

export interface MetalsSlowTaskResult {
  cancel: boolean;
}

export interface MetalsStatusParams {
  text: string;
  show?: boolean;
  hide?: boolean;
  tooltip?: string;
  command?: string;
}

export interface MetalsInputBoxResult {
  value?: string;
  cancelled?: boolean;
}

export interface InputBoxOptions {
  /** * The value to prefill in the input box.  */
  value?: string;
  /** * Selection of the prefilled [`value`](#InputBoxOptions.value). Defined as tuple of two number where the * first is the inclusive start index and the second the exclusive end index. When `undefined` the whole * word will be selected, when empty (start equals end) only the cursor will be set, * otherwise the defined range will be selected.  */ valueSelection?: [
    number,
    number
  ];

  /**
   * The text to display underneath the input box.
   */
  prompt?: string;

  /**
   * An optional string to show as place holder in the input box to guide the user what to type.
   */
  placeHolder?: string;

  /**
   * Set to `true` to show a password prompt that will not show the typed value.
   */
  password?: boolean;

  /**
   * Set to `true` to keep the input box open when focus moves to another part of the editor or to another window.
   */
  ignoreFocusOut?: boolean;

  /**
   * An optional function that will be called to validate input and to give a hint
   * to the user.
   *
   * @param value The current value of the input box.
   * @return A human readable string which is presented as diagnostic message.
   * Return `undefined`, `null`, or the empty string when 'value' is valid.
   */
  validateInput?(
    value: string
  ): string | undefined | null | Thenable<string | undefined | null>;
}
