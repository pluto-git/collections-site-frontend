import { useState, useEffect } from "react";
import { useIntl } from "react-intl";

import CreatableSelect from "react-select/creatable";

const colourOptions = [
  { value: "Apple", label: "Apple", __isNew__: false },
  { value: "Orange", label: "Orange", __isNew__: false },
];

const TagsCreation = () => {
  const [suggestions, setSuggestions] = useState([{}]);
  const [newSuggestions, setNewSuggestions] = useState([{}]);
  const [currentItemTags, setCurrentItemTags] = useState([{}]);
  console.log(newSuggestions);
  const intl = useIntl();

  useEffect(() => {
    //fetching our all suggestions from API
    setSuggestions(colourOptions);
  },[]);

  const handleChange = (values) => {
    values.forEach((val) => {
      if (val.__isNew__) {
        setNewSuggestions((prev) => [...new Set([...prev, val])]);
        //we call our API here to update one by one.
        //in the worst case we ll handle the api after the collection d be created.
        //we have a state of suggestions anyway.
      }
    });
    setCurrentItemTags(values);
  };

  useEffect(() => {
    // here we ll call API to save currentItemTags to our API...
  }, [currentItemTags]);

  const noOptionMessageHandler = () => {
    return intl.formatMessage({
      id: "creatable-multi.no-option-message",
    });
  };

  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        options={suggestions}
        noOptionsMessage={noOptionMessageHandler}
        placeholder={intl.formatMessage({
          id: "creatable-multi.placeholder",
        })}
        menuPortalTarget={document.body}
      />
    </>
  );
};

export default TagsCreation;
