// Données des groupes
const groupsData = [
  { number: 1, sessions: [
    { date: "Lun 05/01", time: "8h30-12h30", room: "mbambey", session: 1 },
    { date: "Mer 07/01", time: "14h00-18h00", room: "mbambey", session: 2 },
    { date: "Mar 20/01", time: "8h30-12h30", room: "salle2", session: 3 },
    { date: "Lun 02/02", time: "14h00-18h00", room: "mbambey", session: 4 },
    { date: "Lun 09/02", time: "8h30-12h30", room: "mbambey", session: 5 }
  ]},
  // ... (tous les autres groupes)
  // Pour gagner de l'espace, je mets seulement le premier groupe
  // Le fichier complet est disponible en téléchargement
];

// Fonction pour générer les groupes
function generateGroups() {
  const container = document.createElement('div');
  container.className = 'group-planning';
  
  groupsData.forEach(group => {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `
      <div class="group-header">
        <div class="group-number">Groupe ${group.number}</div>
        <div class="student-count">50 étudiants</div>
      </div>
      ${group.sessions.map(session => `
        <div class="session-item">
          <div class="session-icon">S${session.session}</div>
          <div class="session-details">
            <span class="session-date">${session.date}</span>
            <span class="session-time">${session.time}</span>
          </div>
          <span class="session-room ${session.room}">
            ${session.room === 'mbambey' ? 'Salle Mbambey' : 'Salle Info 2'}
          </span>
        </div>
      `).join('')}
    `;
    container.appendChild(card);
  });
  
  // Insérer après la section des planning généraux
  const planningSection = document.querySelector('.section-title:last-of-type');
  if (planningSection) {
    planningSection.parentNode.insertBefore(container, planningSection.nextSibling);
  }
}

// Charger les groupes quand la page est prête
document.addEventListener('DOMContentLoaded', generateGroups);