import './CustomInput.scss'

function CustomInput({ label, name, id, type, placeholder }) {
    return (
        <div className='customInput'>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput