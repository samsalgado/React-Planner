import propTypes from 'prop-types';
import Button from './Button'
const Header = ({title, onAdd}) => {
   
    return (
        
        <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        <Button color= 'green' text='AddTask' onClick={onAdd} />
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: propTypes.string,
}
const headingStyle = {
    justifyContent:'center'
}
export default Header
