/**
 * TODOs : Include list of component in map
 *         Change Trash , agent, Server Icon
 */

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('admin/home', {});
};

/**
 * GET /maps
 * Maps page.
 */

exports.maps = (req, res) => {
  const smartrashes = [
    {
      location: 'SmarTrash 1',
      latitude: -18.931129,
      longitude: 47.527687
    }
  ];
  const employees = [
    {
      location: 'Employee 1',
      latitude: -18.931011,
      longitude: 47.525124
    }
  ];
  res.render('admin/maps', {
    title: 'Google Maps API',
    google_map_api_key: 'AIzaSyAkMxCUzUY_hk6oKx8ETk93s5RxHPJNZ1s',
    smartrashes: JSON.stringify(smartrashes),
    employees: JSON.stringify(employees),
  });
};
