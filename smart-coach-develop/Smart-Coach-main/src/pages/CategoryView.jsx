import { useLocation, useNavigate } from 'react-router-dom';
import './CategoryView.css'

function CategoryView({ viewData }) {
  const navigate = useNavigate(); // Hook from react-router-dom
  const location = useLocation(); // Hook from react-router-dom

  const title = getTitle(viewData, location.pathname); // Get the title from the viewData or from the url
  const theme = getTheme(viewData, location.pathname); // Get the theme from the viewData or from the url
  const buttonContent = getButtonContent(location.pathname); // Get the buttonContent from the url
  const items = viewData.items; // Get the items from the viewData

  const stelscout = window.location.pathname.split("/").slice(-2)[0]; // Get the stelscout from the url

  return (
    <div className={`view view--${theme}`}>
      <header className="view-header">
        <div className="container">
          <h3 className="header-title">{title}</h3>
          <button className="header-button" onClick={() => navigate(-1)}>
            <i className="fa fa-solid fa-arrow-left"></i>
            Volver a {buttonContent}
          </button>
        </div>
        <div className="header-logo">
          <img src="/Logos/Logo circular 2.png" alt="Logo Circular 2" id='logo'/>
        </div>
      </header>
      <nav className={`subcategory-list`}>
        {items.map(item => (
          <div 
            className="nav-option" 
            key={item.category}
            onClick={() => { if(stelscout === "steelers"){ navigate(item.target2)} else {navigate(item.target)} }}  
          >
            <figure className="item-image">
              {stelscout === "steelers" ? (
                <img src={item.image2} alt={`category-${item.category}`} />
              ) : (
                <img src={item.image} alt={`category-${item.category}`} />
              )}
            </figure>
            <div className="item-category">{item.category}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}

function getTitle(viewData, url) {
  if(viewData.title === "parent") {
    const title = url.replace(/[-]/g, " ")
    return title;
  }
  return viewData.title;
}

function getTheme(viewData, url) {
  if(viewData.theme === "parent") {
    const view = url.split('/')[1];
    let theme;
    switch(view) {
      case 'scout':
        theme = 'yellow';
        break;
      case 'steelers':
        theme = 'black';
        break;
      default:
        theme = "white";
        break;
    }
    return theme;
  }
  return viewData.theme;
}

function getButtonContent(url) {
  const path = url.substring(1).split('/'); // Remove the first slash and split the url by slashes
  const prevPageIdx = path.length - 2; // Retrieve the category of the second to last element of url
  if (prevPageIdx >= 0) {
    return path[prevPageIdx]; // Return the category of the second to last element of url
  }
  return "menu"; // If there is no second to last element, return "menu"
}

export default CategoryView;