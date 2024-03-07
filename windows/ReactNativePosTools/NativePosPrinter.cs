using Microsoft.ReactNative.Managed;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Devices.PointOfService;

namespace ReactNativePosTools
{
  // This is the structure that will be returned to the JavaScript side
  // src/NativePosPrinter.ts
  struct ReactPosPrinter
  {
    public string DeviceId { get; set; }

    public ReactPosPrinter(string deviceId)
    {
      DeviceId = deviceId;
    }
  };


  [ReactModule("PosPrinter")]
  internal class NativePosPrinter
  {
    private PosPrinter printer = null;

    [ReactMethod("getDefaultAsync")]
    public async void GetDefaultAsync(ReactPromise<ReactPosPrinter> result)
    {
      try
      {
        printer = await PosPrinter.GetDefaultAsync();
        if (printer == null)
        {
          result.Reject(new ReactError { Message = "Printer was not found" });
        } else
        {
          result.Resolve(new ReactPosPrinter { DeviceId = printer.DeviceId });
        }
      }
      catch (Exception ex)
      {
        result.Reject(new ReactError { Message = ex.Message });
      }
    }
  }
}
