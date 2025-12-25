export const CloseSidePanelMessageKey = "CloseSidePanelMessageKey";
export const AppReadyMessageKey = "AppReadyMessageKey";
export const BridgeConnected = "BridgeConnected";
export const NavigateMessageKey = "NavigateMessageKey";

export class KSuiteBridge {
  isConnected = true;
  constructor(options?: any) {}
  on(event: string, callback: () => void) {
    if (event === BridgeConnected) {
      setTimeout(callback, 0);
    }
  }
  sendMessage(message: any) {
    console.log("Mock KSuiteBridge sendMessage:", message);
    return Promise.resolve();
  }
}
