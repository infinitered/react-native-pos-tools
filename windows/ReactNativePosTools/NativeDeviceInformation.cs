using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Windows.Devices.Enumeration;
using Windows.Devices.PointOfService;

using Microsoft.ReactNative.Managed;

namespace ReactNativePosTools
{
  struct ReactDeviceInformation
  {
    public string Id { get; set; }
    public string Name { get; set; }
    public string Kind { get; set; }
    public bool IsDefault { get; set; }
  }

  [ReactModule("DeviceInformation")]
  internal class NativeDeviceInformation
  {
    [ReactMethod("findAllAsync")]
    public async void FindAllAsync(ReactPromise<ReactDeviceInformation[]> result)
    {
      try
      {
        var devices = await DeviceInformation.FindAllAsync();
        var deviceList = new List<ReactDeviceInformation>();
        foreach (var device in devices)
        {
          deviceList.Add(new ReactDeviceInformation
          {
            Id = device.Id,
            Name = device.Name,
            Kind = device.Kind.ToString(),
            IsDefault = device.IsDefault
          });
        }
        result.Resolve(deviceList.ToArray());
      }
      catch (Exception ex)
      {
        result.Reject(new ReactError { Message = ex.Message });
      }
    }
  }
}
