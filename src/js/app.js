(() => {
  let currentHole = Math.floor(Math.random() * 16);
  const hole = (i) => document.getElementById(`hole${i}`);
  const hideHole = (i) => hole(i).className = 'hole';
  const showHole = (i) => hole(i).className = 'hole hole_has-mole';
  const nextHole = () => setTimeout(() => {
    hideHole(currentHole);
    currentHole = Math.floor(Math.random() * 16);
    showHole(currentHole);
    nextHole();
  }, 1000);

  nextHole();
})();
