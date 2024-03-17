

function layout({children}) {
  return (
    <div>
      <h1>comman layout for Login screen</h1>
      {children}
      {/* yai children kaya karaiga login folder kai jitnai bhi component h jaisai
       LoginStudent or LoginTeacher un sab per yai common show karvaiga */}
    </div>
  );
}

export default layout;
