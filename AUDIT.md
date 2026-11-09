# AUDIT.md : à compléter

## 1. Audits outillés

Lance les 3 audits sur la page (`npm run dev`, puis ouvre-la dans Chrome) et
colle ici un résumé de ce que chacun remonte :

- **Lighthouse** (DevTools → onglet Lighthouse → catégorie Accessibility) :
- **axe DevTools** (extension Chrome) :
- **WAVE** (https://wave.webaim.org/, ou l'extension) :

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | #aaaaaa | #ffffff | 2.32:1 | 4.5:1 | Non Conforme 
| `.label` | #999999 | #ffffff | 2.84:1 | 4.5:1 | Non Conforme |
| `.hint` | #bbbbbb | #ffffff | 1.91:1 | 4.5:1 | Non Conforme |
| `.btn-primary` | #ffffff | #6fa8dc | 2.52:1 | 4.5:1 (texte) | Non Conforme |

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

Classe les 4 corrections par ordre d'impact (1 = le plus urgent) et explique pourquoi.
 
1. `.btn-primary`
	C'est l'élément d'action principal (Call to Action).
    Si un utilisateur ne peut pas lire ou identifier le bouton pour valider, soumettre ou progresser dans son parcours, le site devient immédiatement inutilisable.

2.  `.subtitle`
	Le sous-titre apporte un contexte crucial au titre principal et structure la hiérarchie de l'information. 
    Un ratio de 2.32:1 est particulièrement bas pour du texte informatif que l'utilisateur doit lire pour comprendre le contenu de la page.

3. `.label`
	Les labels permettent aux utilisateurs de savoir quelles informations saisir dans un formulaire. 
    Si le label est illisible, l'utilisateur ne sait pas ce qui lui est demandé, ce qui bloque la complétion du formulaire (contact, inscription, paiement).

4.  `.hint`
	Bien que son ratio actuel soit le pire (1.91:1).
    L'utilisateur peut souvent deviner l'action grâce au label (qui est prioritaire), même si la correction reste indispensable pour l'accessibilité globale.