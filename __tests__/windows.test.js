describe('browser.windows', () => {
  test('get', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.get)).toBe(true);
    chrome.windows.get(1, {}, callback);
    expect(chrome.windows.get).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('getCurrent', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.getCurrent)).toBe(true);
    chrome.windows.getCurrent({}, callback);
    expect(chrome.windows.getCurrent).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('getLastFocused', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.getLastFocused)).toBe(true);
    chrome.windows.getLastFocused({}, callback);
    expect(chrome.windows.getLastFocused).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('getAll', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.getAll)).toBe(true);
    chrome.windows.getAll({}, callback);
    expect(chrome.windows.getAll).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('create', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.create)).toBe(true);
    chrome.windows.create({}, callback);
    expect(chrome.windows.create).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('update', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.update)).toBe(true);
    chrome.windows.update(1, {}, callback);
    expect(chrome.windows.update).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('remove', done => {
    const callback = jest.fn(() => done());
    expect(jest.isMockFunction(chrome.windows.remove)).toBe(true);
    chrome.windows.remove(1, callback);
    expect(chrome.windows.remove).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
