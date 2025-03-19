using MediatR;

namespace Ambev.DeveloperEvaluation.Application.Products.GetProduct;

/// <summary>
/// Command for retrieving a product by their ID
/// </summary>
public record GetProductsCommand : IRequest<IEnumerable<GetProductResult>>
{
}
