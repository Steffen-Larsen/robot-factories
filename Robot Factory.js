const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {console.log('Beep Boop')}
    }
  }
  
  const tinCan = robotFactory ('P-500', true);
  
  const muhaha = robotFactory ('Muhaha-V1', true);
  
  const fipo = robotFactory ('Snap-Fipo-V1', 'Samsung');
  
  tinCan.beep();
  
  console.log(tinCan);
  console.log(muhaha);
  console.log(fipo);