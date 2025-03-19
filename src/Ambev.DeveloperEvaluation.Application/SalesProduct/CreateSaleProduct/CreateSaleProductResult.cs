namespace Ambev.DeveloperEvaluation.Application.SaleProducts.CreateSaleProduct;

/// <summary>
/// Represents the response returned after successfully creating a new SaleProduct.
/// </summary>
/// <remarks>
/// This response contains the unique identifier of the newly created SaleProduct,
/// which can be used for subsequent operations or reference.
/// </remarks>
public class CreateSaleProductResult
{
    /// <summary>
    /// Gets or sets the unique identifier of the newly created SaleProduct.
    /// </summary>
    /// <value>A GUID that uniquely identifies the created SaleProduct in the system.</value>
    public Guid Id { get; set; }

    /// <summary>
    /// The Id of the Sale
    /// </summary>
    public Guid SaleId { get; set; }

    /// <summary>
    /// The Id of the Product
    /// </summary>
    public Guid ProductId { get; set; }

    /// <summary>
    /// The Name of the Product
    /// </summary>
    public string ProductName { get; set; } = string.Empty;

    /// <summary>
    /// The Value of the Product in the sale day
    /// </summary>
    public decimal UnitValue { get; set; }

    /// <summary>
    /// The discount of the product in the sale day
    /// </summary>
    public decimal Discount { get; set; }

    /// <summary>
    /// The total value of the product in the sale day
    /// </summary>
    public decimal TotalUnityValue { get; set; }

    /// <summary>
    /// If the product was canceled in the sale
    /// </summary>
    public bool Canceled { get; set; }

    /// <summary>
    /// The quantity of the product in the sale
    /// </summary>
    public int Count { get; set; }
}
