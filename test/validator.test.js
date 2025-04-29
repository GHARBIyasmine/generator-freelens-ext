/* eslint-env jest */

import { validatePublisher } from '../generators/app/validator.js';

test("validatePublisher", () => {
  const msg = "Publisher name must be in the format @scope/name";
  expect(validatePublisher("@test/test")).toBe(true);
  expect(validatePublisher("test/test")).toBe(msg);
  expect(validatePublisher("@test")).toBe(msg);
  expect(validatePublisher("test")).toBe(msg);
  expect(validatePublisher("publisher_name/pkg_name")).toBe(msg);
  expect(validatePublisher("publisher_namepkg_name/")).toBe(msg);
  expect(validatePublisher("/publisher_namepkg_name")).toBe(msg);
  expect(validatePublisher("@publisher_namepkg_name")).toBe(msg);
  expect(validatePublisher("@publisher_name")).toBe(msg);
  expect(validatePublisher("publisher_name/pkg_name@")).toBe(msg);
  expect(validatePublisher("publisher_name@/pkg_name")).toBe(msg);
  expect(validatePublisher("pkg_name")).toBe(msg);
});
