using Cafe.Application.DTOs.UserDTOs.Request;
using FluentValidation;

namespace Cafe.Application.Validations.Auth;

public class LoginValidator : AbstractValidator<UserLoginRequest>
{
    public LoginValidator()
    {
        RuleFor(x => x.UserName)
            .NotEmpty().WithMessage("UserName must not be empty.")
            .MinimumLength(1).WithMessage("UserName must contain at least one character.");
            
        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Password must not be empty.")
            .MinimumLength(6).WithMessage("Password must be at least 6 characters long.");
    }
}