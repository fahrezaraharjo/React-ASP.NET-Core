using Microsoft.Extensions.Caching.Memory;
using ReactApp1.Application.Configuration.Caching;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Caching
{
    public class AppMemoryCache(IMemoryCache cache) : IAppMemoryCache
    {
        private bool _isCachingEnabled = false;
        private int _timeSpanInHours = 1;

        public void EnableCaching(bool enable = true)
        {
            _isCachingEnabled = enable;
        }

        public bool IsAvailable()
        {
            if (_isCachingEnabled)
            {
                return cache != null;
            }

            return false;
        }

        public void Add<TItem>(string key, TItem item, TimeSpan? expirationTime = null)
        {
            if (IsAvailable())
            {
                var timeSpan = expirationTime ?? TimeSpan.FromHours(_timeSpanInHours);
                
                cache.Set(key, item, timeSpan);
            }
        }

        public void Add<TItem>(string key, TItem item, DateTime absoluteExpiration)
        {
            if (IsAvailable())
            {
                DateTimeOffset offset = absoluteExpiration;
                cache.Set(key, item, offset);
            }
        }

        public TItem? Get<TItem>(string key)
        {
            if (IsAvailable() && cache.TryGetValue(key, out TItem? value))
            {
                System.Diagnostics.Debug.WriteLine($"Cache hit for key: {key}");
                return value;
            }

            return default;
        }

        public void Remove(string key)
        {
            if (IsAvailable())
            {
                cache.Remove(key);
            }
        }

        public void Clear()
        {
            if (IsAvailable())
            {
                // MemoryCache does not provide a built-in method to clear all items.
                // This is a workaround to clear the cache by creating a new instance.
                // In production, consider using a different caching strategy if you need to clear the cache frequently.
                cache.Dispose();

                var options = new MemoryCacheOptions();
                var newCache = new MemoryCache(options);
                
                cache = newCache;
            }    
        }
    }
}
