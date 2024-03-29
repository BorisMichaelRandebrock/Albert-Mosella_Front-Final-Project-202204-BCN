import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getOnePorpertyThunk } from "../../redux/thunks/propertyThunks/propertyThunks";
import EditButton from "../EditButton/EditButton";
import DetailPropertyContainer from "./DetailPropertyStyle";

const DetailProperty = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getOnePorpertyThunk(id as string));
  }, [dispatch, id]);

  const { oneProperty } = useAppSelector((state) => state.oneProperty);

  return (
    <DetailPropertyContainer>
      <div className="image-container">
        <img src={oneProperty.image} alt="house perspective" />
      </div>
      <div className="main-details">
        <div className="property-title">
          <h4>{oneProperty.name}</h4>
          <span>{`${oneProperty.price}€`}</span>
        </div>
        <ul className="property-icons">
          <li>
            <span>{oneProperty.bedrooms}</span>
            <img src="/images/dormitorio.png" alt="" />
          </li>
          <li>
            <span>{oneProperty.bathrooms}</span>
            <img src="/images/baño.png" alt="" />
          </li>
          <li>
            <span>{oneProperty.surface}</span>
            <img src="/images/superficie.png" alt="" />
          </li>
        </ul>
      </div>
      <p className="description">{oneProperty.description}</p>
      <div className="features">
        <ul>
          <li>
            {oneProperty.views ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Views
          </li>
          <li>
            {oneProperty.airConditioning ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Air Conditioning
          </li>
          <li>
            {oneProperty.heating ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Heating
          </li>
          <li>
            {oneProperty.parking ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Parking
          </li>
          <li>
            {oneProperty.pool ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Pool
          </li>
        </ul>
        <ul>
          <li>
            {oneProperty.fireplace ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Fireplace
          </li>
          <li>
            {oneProperty.garden ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Garden
          </li>
          <li>
            {oneProperty.laundryRoom ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Laundry Room
          </li>
          <li>
            {oneProperty.storage ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Storage
          </li>
          <li>
            {oneProperty.terrace ? (
              <img src="/images/icons8-check-64.png" alt="check-icon" />
            ) : (
              <img
                className="uncheck"
                src="/images/icons8-uncheck-64.png"
                alt="uncheck-icon"
              />
            )}
            Terrace
          </li>
        </ul>
      </div>
      {token && <EditButton id={oneProperty.id} />}
    </DetailPropertyContainer>
  );
};

export default DetailProperty;
