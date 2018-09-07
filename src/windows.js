// https://developer.chrome.com/extensions/windows

export const windows = {
  get: jest.fn((id = '', getInfo = {}, cb = () => {}) => cb({})),
  getCurrent: jest.fn((getInfo = {}, cb = () => {}) => cb({})),
  getLastFocused: jest.fn((getInfo = {}, cb = () => {}) => cb({})),
  getAll: jest.fn((getInfo = {}, cb = () => {}) => cb({})),
  create: jest.fn((createData = {}, cb = () => {}) => cb({})),
  update: jest.fn((windowId = '', updateInfo = {}, cb = () => {}) => cb({})),
  remove: jest.fn((windowId = '', cb = () => {}) => cb({})),
};
