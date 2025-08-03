using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Domain.SeedWork
{
    /// <summary>
    /// Base entity class with custom primary key type.
    /// </summary>
    public abstract class EntityBase
    {
        public bool IsDeleted { get; set; }
        public DateTime? DeletedAt { get; set; }
        public string? DeletedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? UpdatedBy { get; set; }
        public string? SourceOfRecord { get; set; }

        public void MarkAsCreated(DateTime? createdAt = null, string? createdBy = null)
        {
            CreatedAt = createdAt ?? DateTime.UtcNow;
            CreatedBy = createdBy;
            IsDeleted = false;
        }

        public void MarkAsUpdated(DateTime? updatedAt = null, string? updatedBy = null)
        {
            UpdatedAt = updatedAt ?? DateTime.UtcNow;
            UpdatedBy = updatedBy;
        }

        public void MarkAsDeleted(DateTime? deletedAt = null, string? deletedBy = null)
        {
            IsDeleted = true;
            DeletedAt = deletedAt ?? DateTime.UtcNow;
            DeletedBy = deletedBy;
        }

        public void Restore()
        {
            IsDeleted = false;
            DeletedAt = null;
            DeletedBy = null;
        }
    }
}
