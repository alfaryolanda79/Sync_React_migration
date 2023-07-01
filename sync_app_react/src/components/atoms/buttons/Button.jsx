import './button.css';

function Button({button_content, className}) {
   const buttonClass = `button ${className}`;
    return (
        <>
          <button className={buttonClass}>
            {button_content}
          </button>
        </>
    )
}

export default Button;
