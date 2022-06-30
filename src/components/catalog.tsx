import  PrimeCatalogContainer  from "./../adobe-learning-manager-components/ui.frontend/src/almLib/components/Catalog/PrimeCatalogContainer/PrimeCatalogContainer";
  const Catalog = () => {
    return(
        <div
        className="catalog__container"
        data-show-filters="false"
        data-show-search="true"
        data-catalogs="true"
        data-lo-types="true"
        data-skill-name="true"
        data-lo-format="true"
        data-duration="true"
        data-price="true"
        data-skills-level="true"
        data-learner-state="true"
        data-tag-name="true"
        data-skill-level="true"
      ><PrimeCatalogContainer/>
      </div>
    );
 };
 export default Catalog;

