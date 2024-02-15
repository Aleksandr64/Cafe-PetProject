using Cafe.Application.DTOs.DishDTOs.Request;
using FluentValidation;

namespace Cafe.Application.Validations.Dish;

public class PutDishValidator : AbstractValidator<PutDishRequest>
{
    public PutDishValidator()
    {
        RuleFor(x => x.Id)
            .NotEmpty().WithMessage("Id must not be empty.")
            .Must(BeValidGuid).WithMessage("Id must be a valid GUID.");
        
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Title must not be empty.")
            .MinimumLength(5).WithMessage("Description must be at least 5 characters long.");
        
        RuleFor(x => x.Description)
            .NotEmpty().WithMessage("Description must not be empty.")
            .MinimumLength(20).WithMessage("Description must be at least 10 characters long.");
        
        RuleFor(x => x.Price)
            .GreaterThan(0).WithMessage("Price must be greater than 0.");
        
        RuleFor(x => x.ImageUrl)
            .NotEmpty().WithMessage("ImageUrl must not be empty.")
            .Must(BeAValidUrl).WithMessage("Image URL must be a valid URL.");
    }
    private bool BeAValidUrl(string url)
    {
        return string.IsNullOrWhiteSpace(url) || Uri.TryCreate(url, UriKind.Absolute, out _);
    }
    private bool BeValidGuid(Guid guid)
    {
        return guid != Guid.Empty;
    }
}