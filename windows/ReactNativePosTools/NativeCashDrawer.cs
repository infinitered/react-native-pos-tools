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
  // src/NativeCashDrawer.ts

  struct ReactCashDrawer
  {
    public string DeviceId { get; set; }

    public ReactCashDrawer(string deviceId)
    {
      DeviceId = deviceId;
    }
  };

  [ReactModule("CashDrawer")]
  internal class NativeCashDrawer
  {

    private CashDrawer drawer = null;

    [ReactMethod("getDefaultAsync")]
    public async void GetDefaultAsync(ReactPromise<ReactCashDrawer> result)
    {
      try
      {
        drawer = await CashDrawer.GetDefaultAsync();
        if (drawer == null)
        {
          result.Reject(new ReactError { Message = "Cash Drawer was not found" });
        }
        else
        {
          result.Resolve(new ReactCashDrawer { DeviceId = drawer.DeviceId });
        }
      }
      catch (Exception ex)
      {
        result.Reject(new ReactError { Message = ex.Message });
      }
    }
  }
}
