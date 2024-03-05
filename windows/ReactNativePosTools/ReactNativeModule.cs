using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;

namespace ReactNativePosTools
{
    [ReactModule("ReactNativePosTools")]
    internal sealed class ReactNativeModule
    {
        // See https://microsoft.github.io/react-native-windows/docs/native-modules for details on writing native modules

        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }

    [ReactSyncMethod("multiply")]
    public double Multiply(double a, double b)
        {
            double result = a * b;
            return result;
        }
    }
}
