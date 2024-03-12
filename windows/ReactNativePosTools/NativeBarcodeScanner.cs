using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.ReactNative.Managed;

using Windows.Devices.PointOfService;

namespace ReactNativePosTools
{
  // This is the structure that will be returned to the JavaScript side
  // src/NativeBarcodeScanner.ts
  struct ReactBarcodeScanner
  {
    public string DeviceId { get; set; }

    public ReactBarcodeScanner(string deviceId)
    {
      DeviceId = deviceId;
    }
  };

  [ReactModule("BarcodeScanner")]
  internal class NativeBarcodeScanner
  {
    private BarcodeScanner scanner = null;

    [ReactMethod("getDefaultAsync")]
    public async void GetDefaultAsync(ReactPromise<ReactBarcodeScanner> result)
    {
      try
      {
        scanner = await BarcodeScanner.GetDefaultAsync();
        if (scanner == null)
        {
          result.Reject(new ReactError { Message = "Scanner was not found" });
        }
        else
        {
          result.Resolve(new ReactBarcodeScanner { DeviceId = scanner.DeviceId });
        }
      }
      catch (Exception ex)
      {
        result.Reject(new ReactError { Message = ex.Message });
      }
    }
  }
}
