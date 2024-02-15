using Cafe.Application.DTOs.UserDTOs.Request;
using FluentValidation;

namespace Cafe.Application.Validations.Auth;

public class RegistrationValidator : AbstractValidator<RegisterUserRequest>
{
    public RegistrationValidator()
    {
        RuleFor(x => x.FirstName)
            .NotEmpty().WithMessage("First name must not be empty.");
            
        RuleFor(x => x.LastName)
            .NotEmpty().WithMessage("Last name must not be empty.");

        RuleFor(x => x.UserName)
            .NotEmpty().WithMessage("User name must not be empty.")
            .MinimumLength(3).WithMessage("User name must be at least 3 characters long.")
            .MaximumLength(50).WithMessage("User name cannot exceed 50 characters.");

        RuleFor(x => x.Email)
            .NotEmpty().WithMessage("Email must not be empty.")
            .EmailAddress().WithMessage("Invalid email address.")
            .MaximumLength(100).WithMessage("Email cannot exceed 100 characters.");

        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Password must not be empty.")
            .MinimumLength(6).WithMessage("Password must be at least 6 characters long.")
            .MaximumLength(50).WithMessage("Password cannot exceed 50 characters.");

        RuleFor(x => x.PhoneNumber)
            .NotEmpty().WithMessage("Phone number must not be empty.")
            .Matches(@"^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$").WithMessage("Invalid phone number format.")
            .MaximumLength(20).WithMessage("Phone number cannot exceed 20 characters.");
    }
}