// CompletionTime Replicant
const timerReplicant = nodecg.Replicant("timer");
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResettedRep = nodecg.Replicant("isTimerResetted")


function updateTime(ReplicantName, buttonId, textId) {
  document.getElementById(buttonId).addEventListener('click', () => {
    nodecg.Replicant(ReplicantName).value = timerReplicant.value;
  })
  
  nodecg.Replicant(ReplicantName).on('change', (time) => {
    if (time == undefined) {
      document.getElementById(textId).innerText = ""
    } else {
      document.getElementById(textId).innerText = time
    }
  })
}


function updateAndFinishAll(ReplicantName, buttonId) {
  document.getElementById(buttonId).addEventListener('click', () => {
    nodecg.Replicant(ReplicantName).value = timerReplicant.value;
    isTimerPausedRep.value = true;
  })
}


// Undo run completion
function undoTime(ReplicantName, buttonId, textId) {
  document.getElementById(buttonId).addEventListener('click', () => {
    nodecg.Replicant(ReplicantName).value = "";
  })

  nodecg.Replicant(ReplicantName).on('change', (time) => {
    document.getElementById(textId).innerText = time
  })
}


// Undo process for undoAll
function undoProc(ReplicantName, textId) {
  nodecg.Replicant(ReplicantName).value = "";
  nodecg.Replicant(ReplicantName).on('change', (time) => {
    document.getElementById(textId).innerText = time
  })
}


function undoAll() {
    undoProc('timeP1', 'completeTimeP1');
    undoProc('timeP2', 'completeTimeP2');
    undoProc('timeP3', 'completeTimeP3');
    undoProc('timeP4', 'completeTimeP4');
    undoProc('timeP5', 'completeTimeP5');
}


updateTime('timeP1', 'finish-1', 'completeTimeP1')
updateTime('timeP2', 'finish-2', 'completeTimeP2')
updateTime('timeP3', 'finish-3', 'completeTimeP3')
updateTime('timeP4', 'finish-4', 'completeTimeP4')
updateTime('timeP5', 'finish-5', 'completeTimeP5')
updateAndFinishAll('timeP1', 'finishAll-1',)
updateAndFinishAll('timeP2', 'finishAll-2',)
updateAndFinishAll('timeP3', 'finishAll-3',)
updateAndFinishAll('timeP4', 'finishAll-4',)
updateAndFinishAll('timeP5', 'finishAll-5',)
undoTime('timeP1', 'undo-1', 'completeTimeP1')
undoTime('timeP2', 'undo-2', 'completeTimeP2')
undoTime('timeP3', 'undo-3', 'completeTimeP3')
undoTime('timeP4', 'undo-4', 'completeTimeP4')
undoTime('timeP5', 'undo-5', 'completeTimeP5')
document.getElementById('undoAll').addEventListener('click', () => {
  undoAll()
})


isTimerResettedRep.on("change", (newValue) => {
  if (newValue === true) {
    undoAll()
  }
})


// Update runner name.
document.getElementById('updateRunnerNameBtn').addEventListener('click', () => {
  nodecg.Replicant('runner-1').value = document.getElementById('runnerName-1').value;
  nodecg.Replicant('runner-2').value = document.getElementById('runnerName-2').value;
  nodecg.Replicant('runner-3').value = document.getElementById('runnerName-3').value;
  nodecg.Replicant('runner-4').value = document.getElementById('runnerName-4').value;
  nodecg.Replicant('runner-5').value = document.getElementById('runnerName-5').value;
})


function fetchRunnerName(ReplicantName, ElementId) {
  nodecg.Replicant(ReplicantName).on('change', (newVal) => {
    document.getElementById(ElementId).value = newVal;
  })
}

fetchRunnerName('runner-1', 'runnerName-1')
fetchRunnerName('runner-2', 'runnerName-2')
fetchRunnerName('runner-3', 'runnerName-3')
fetchRunnerName('runner-4', 'runnerName-4')
fetchRunnerName('runner-5', 'runnerName-5')