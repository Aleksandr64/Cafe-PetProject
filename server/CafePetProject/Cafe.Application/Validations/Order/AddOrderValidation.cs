using Cafe.Application.DTOs.OrderDTOs.Request;
using FluentValidation;

namespace Cafe.Application.Validations.Order;

public class AddOrderValidation : AbstractValidator<AddOrderRequest>
{
    public AddOrderValidation()
    {
        RuleFor(x => x.CustomerName)
            .NotEmpty().WithMessage("Customer name must not be empty.");
        
        RuleFor(x => x.PhoneNumber)
            .NotEmpty().WithMessage("Phone number must not be empty.");
        
        RuleFor(x => x.Address)
            .NotEmpty().WithMessage("Address must not be empty.");
        
        RuleFor(x => x.EmailAddress)
            .NotEmpty().WithMessage("Email address must not be empty.")
            .EmailAddress().WithMessage("Invalid email address.");
        
        RuleFor(x => x.TotalAmount)
            .GreaterThan(0).WithMessage("Total amount must be greater than 0.");
        
        RuleFor(x => x.OrderItems)
            .NotEmpty().WithMessage("Order items must not be empty.");
    }
}