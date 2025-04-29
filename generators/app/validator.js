export const validateExtensionName = (name) => {
  if (!name) {
    return "Extension name is required";
  }
  if (!/^[a-z0-9-]+$/.test(name)) {
    return "Extension name can only contain lowercase letters, numbers, and hyphens";
  }
  return true;
};

export const validatePublisher = (publisher) => {
  if (!publisher) {
    return "Publisher name is required";
  }
  if (!/^@[a-z0-9-]+\/[a-z0-9-]+$/.test(publisher)) {
    return "Publisher name must be in the format @scope/name";
  }
  return true;
};

