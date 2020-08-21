$(function() {
  const emailInput = $(".checkout__input--email input").first();

  const nameField = $(".checkout__input--name").first();
  const nameInput = $(".checkout__input--name input").first();

  const countryField = $(".checkout__input--country").first();
  const countrySelect = $(".checkout__input--country select").first();

  const cityField = $(".checkout__input--city").first();
  const cityInput = $(".checkout__input--city input").first();

  const addressField = $(".checkout__input--address").first();
  const addressInput = $(".checkout__input--address input").first();

  const flatField = $(".checkout__input--flat").first();
  const flatInput = $(".checkout__input--flat input").first();

  const zipField = $(".checkout__input--zip").first();
  const zipInput = $(".checkout__input--zip input").first();

  const phoneField = $(".checkout__input--phone").first();
  const phoneInput = $(".checkout__input--phone input").first();

  const payButton = $(".checkout__pay").first();

  const note = $(".checkout__note").first();

  const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmail = (string) =>
    emailRegexp.test(String(string).toLowerCase());

  const isPresent = (string) =>
    string && string.length > 0;

  const showField = (field) => field.removeClass("visually-hidden");
  const hideField = (field) => field.addClass("visually-hidden");
  const delOpacity = (field) => field.removeClass("opacity");
  const addOpacity = (field) => field.addClass("opacity");

  emailInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isEmail(value)) {
      showField(nameField);
    }
  });

  nameInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(countryField);
      showField(cityField);
    }
  });

  countrySelect.on("select2:select", () => {
    console.log("ggg");
    const value = countrySelect.val();
    if (value !== "Россия") {
      note.removeClass("opacity");
    } else {
      note.addClass("opacity");
    }
  });

  cityInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(addressField);
    }
  });

  addressInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(flatField);
    }
  });

  flatInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(zipField);
    }
  });

  zipInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(phoneField);
    }
  });

  zipInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      showField(phoneField);
    }
  });

  phoneInput.on("input", (evt) => {
    const value = evt.target.value;
    if (isPresent(value)) {
      delOpacity(payButton);
    }
  });
});