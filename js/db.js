 
// habilitar dados offline
db.enablePersistence()
    .catch(function(err) {
    // provavelmente multiplas abas abertas ao mesmo tempo
        if (err.code == 'failed-precondition') {
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            // browser nao suporta
            console.log('persistance not available');
        }
    });

// real-time listener que verifica as mudanças que ocorrem
db.collection('atividades').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
             // remover da pagina tambem
        }
    });
});

// adicionar nova ATIVIDADE
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const sobremesa = {
        
alunoqueadicionouaatividade: form.atividadeAluno.value,
        atividade: form.atividadeAdicionar.value,
        descricao: form.atividadeDescricao.value,
        disciplina: form.atividadeDisciplina.value,
        horario: form.atividadeHorario.value
    };

    db.collection('atividades').add(atividade)
        .catch(err => console.log(err));

    //reseta o formulario
    form.atividadeAluno.value = '';
    form.atividadeAdicionar.value = '';
    form.atividadeDescricao.value = '';
    form.atividadeDisciplina.value = '';
    form.atividadeHorario.value = '';

});
