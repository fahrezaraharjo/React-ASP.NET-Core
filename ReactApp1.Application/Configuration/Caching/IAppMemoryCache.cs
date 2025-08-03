using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Configuration.Caching
{
    /// <summary>
    /// Initialize the in-memory cache service. Use sparingly and with caution, as it may cause unexpected behavior.
    /// </summary>
    public interface IAppMemoryCache
    {
        /// <summary>
        /// Allow experimental in-memory caching for the repository. Use with caution, as it may cause some issues.
        /// </summary>
        void EnableCaching(bool enable = true);

        /// <summary>
        /// Check if the cache store is available.
        /// </summary>
        bool IsAvailable();

        /// <summary>
        /// Add an item to the cache store.
        /// </summary>
        /// <param name="expirationTime">If not provided, the default expiration time is 1 hour.</param>
        public void Add<TItem>(string key, TItem item, TimeSpan? expirationTime = null);

        /// <summary>
        /// Add an item to the cache store with absolute expiration time.
        /// </summary>
        public void Add<TItem>(string key, TItem item, DateTime absoluteExpiration);

        /// <summary>
        /// Retrieve an item from the cache store. If the item is not found, it returns the default value of the type.
        /// </summary>
        public TItem? Get<TItem>(string key);

        /// <summary>
        /// Remove an item from the cache store.
        /// </summary>
        public void Remove(string key);

        /// <summary>
        /// Clear the cache store.
        /// </summary>
        public void Clear();
    }
}
