const data = [
  {
    label: 'Surgery',
    startDate: '1/23/2016',
    endDate: '5/1/2016',
    data: [
      {
        customClass: 'dot surgery',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2016, 1, 23]),
      }, {
        label: 'mastectomy,_no',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 1, 23]),
        to: new Date([2016, 5, 1]),
        customClass: 'dot-label surgery',
      }
    ]
  },{
    label: 'Radiation Therapy',
    startDate: '2/15/2016',
    endDate: '2/20/2016',
    data: [
      {
        label: "Intensity-modulated Radiation Therapy (IMRT)",
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 2, 15]),
        to: new Date([2016, 2, 20]),
        customClass: 'radiation'
      }
    ]
  }, {
    label: 'Regimen',
    startDate: '9/25/2016',
    endDate: '3/4/2017',
    data: [
      {
        label: "CMF",
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 9, 25]),
        to: new Date([2017, 3, 4]),
        customClass: 'regimen'
      },{
        label: "AC",
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 3, 1]),
        to: new Date([2016, 9, 15]),
        customClass: 'regimen'
      }
    ]
  }, {
    label: 'Regimen Interval',
    startDate: '4/2/2016',
    endDate: '2/3/2016',
    data: [
      {
        label: "Investigational",
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 4, 2]),
        to: new Date([2016, 2, 3]),
        customClass: 'regimen-interval'
      },
    ]
  }
];

