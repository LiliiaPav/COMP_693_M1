let zak='Zak Ruvalcaba'
        let sally='Sally Smith'
        let holly='Holly Unlikely'
        let lily='Lily Tompson'
        let tom='Tom Hanks'
        let Rhett = 'Rhett Butler'
        let robin='Robin Banks'
        let aaron = 'Aaron D. Tyres'
        let clark='Clark Gable'

        const element = (
            <ul style={{'color':'blue', 'fontSize':'24px'}}>
                <li>{zak}</li>
                <li>{sally}</li>
                <li>{holly}</li>
                <li>{lily}</li>
                <li>{tom}</li>
                <li>{Rhett}</li>
                <li>{robin}</li>
                <li>{aaron}</li>
                <li>{clark}</li>
            </ul>
        )
        ReactDOM.render(element, document.getElementById('content'))
