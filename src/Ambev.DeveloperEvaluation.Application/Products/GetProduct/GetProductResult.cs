using Ambev.DeveloperEvaluation.Domain.Enums;

namespace Ambev.DeveloperEvaluation.Application.Products.GetProduct;

/// <summary>
/// Response model for GetProduct operation
/// </summary>
public class GetProductResult
{
    /// <summary>
    /// The unique identifier of the product
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// The product's Title
    /// </summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// The product's Image address
    /// </summary>
    public string Image { get; set; } = string.Empty;

    /// <summary>
    /// The product's Category
    /// </summary>
    public string Category { get; set; } = string.Empty;

    /// <summary>
    /// The product's Price
    /// </summary>
    public double Price { get; set; }

    /// <summary>
    /// Gets or sets the Description of the Product to be created.
    /// </summary>
    public string Description { get; set; } = string.Empty;
}
