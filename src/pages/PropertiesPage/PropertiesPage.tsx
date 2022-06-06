import { NavLink } from "react-router-dom";
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertiesPageContainer from "./PropertiesPageStyles";

const PropertiesPage = (): JSX.Element => {
  return (
    <PropertiesPageContainer>
      <h2>All properties</h2>
      <div className="decoration-line"></div>
      <NavLink to="/propertyform">
        <button className="long-button">Add a new property</button>
      </NavLink>
      <PropertiesList />
    </PropertiesPageContainer>
  );
};

export default PropertiesPage;
