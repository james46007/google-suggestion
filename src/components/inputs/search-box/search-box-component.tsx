import React, {useState, useEffect} from "react";
import Modal from '../modal/modal';
import {fetchData} from '../../../services/api-maps-service';
import {
  API_KEY_GOOGLE_MAPS,
  API_URL_GOOGLE_MAPS,
  MESSAGE_ZIP_INVALID,
  MESSAGE_ZIP_VALID, TOTAL_PREDICTIONS,
  ZIP_CODES
} from '../../../utils/constants';
import {Prediction} from '../../../interfaces/api-google/IPredictions';
import {IModal} from "../../../interfaces/inputs/IModal";
import UnorderedListComponent from "../unordered-list/unordered-list";
import Spinner from "../spinner/spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Address} from "../../../interfaces/api-google/IAddress";

const SearchBoxComponent = () => {

  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [autocomplete, setAutocomplete] = useState<any>({});
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [content, setContent] = useState<IModal>();
  const [loading, setLoading] = useState<boolean>(false);

  const openModal = async (description: string) => {
    try {
      setLoading(true);
      const {results} = await fetchData(description);
      const result: number = getZipCodeFromAddress(results);

      if (ZIP_CODES.includes(result)) {
        setContent(MESSAGE_ZIP_VALID);
        setSearchValue(description)
      } else {
        setContent(MESSAGE_ZIP_INVALID);
        setSearchValue(description)
      }
      setModalOpen(true);
    } catch (error: any) {
      toast.error(error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getZipCodeFromAddress = (results: Address[]) => {
    for (const result of results) {
      const addressComponent = result.address_components.find(
        (component: any) => component.types.includes('postal_code')
      );
      if (addressComponent) {
        return +addressComponent.short_name;
      }
    }
    return 0;
  };


  const loadGoogleMapsApi = (callback: any) => {
    const script: HTMLElement | null = document.getElementById("googleMaps");
    if (!script) {
      const newScript: HTMLScriptElement = document.createElement("script");
      newScript.src = `${API_URL_GOOGLE_MAPS}/maps/api/js?key=${API_KEY_GOOGLE_MAPS}&libraries=places`;
      newScript.id = "googleMaps";
      newScript.async = true;
      newScript.defer = true;

      document.body.appendChild(newScript);
      newScript.onload = callback;
    }
  };

  useEffect(() => {
    loadGoogleMapsApi(() => {
      const autocomplete = new window.google.maps.places.AutocompleteService();
      setAutocomplete(autocomplete);
    });
  }, []);

  useEffect(() => {
    try {
      if (searchValue && autocomplete) {
        autocomplete.getPlacePredictions({input: searchValue})
          .then((r: any) => {
            setPredictions(r.predictions.splice(0, TOTAL_PREDICTIONS))
          });
      } else {
        setPredictions([])
      }
    } catch (error) {

    }
  }, [searchValue, autocomplete])

  const handleInputChange = ({target: {value}}: any) => {
    setSearchValue(value);
  };

  return (
    <div className=" shadow-black shadow  opacity-75">
      <div className="relative">
        <div className="flex items-center">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                        <img
                          src="/assets/icons/map-pin.png"
                          alt="nada"
                          width={13} height={20}
                        />
                    </span>
          <input
            data-cy="places-search"
            id="places-search"
            type="text"
            placeholder="Search places"
            className="pl-10 p-4 text-base font-bold  w-full custom-input"
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <UnorderedListComponent predictions={predictions} openModal={openModal}/>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={content}/>
      <Spinner loading={loading}/>
      <ToastContainer />
    </div>
  );
};

export default SearchBoxComponent;
