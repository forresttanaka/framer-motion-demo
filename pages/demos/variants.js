import React from 'react';
import { motion } from 'framer-motion';

const germanQuotation = `
    Eine neue wissenschaftliche Wahrheit pflegt sich nicht in der Weise durchzusetzen, daß ihre
    Gegner überzeugt werden und sich als belehrt erklären, sondern vielmehr dadurch, daß ihre
    Gegner allmählich aussterben und daß die heranwachsende Generation von vornherein mit der
    Wahrheit vertraut gemacht ist. … Eine neue große wissenschaftliche Idee pflegt sich nicht in
    der Weise durchzusetzen, daß ihre Gegner allmählich überzeugt und bekehrt werden — daß aus
    einem Saulus ein Paulus wird, ist eine große Seltenheit —, sondern vielmehr in der Weise, dass
    die Gegner allmählich aussterben und daß die heranwachsende Generation von vornherein mit der
    Idee vertraut gemacht wird. Auch hier heißt es wieder: Wer die Jugend hat, der hat die Zukunft.`

const englishQuotation = `
    A new scientific truth does not generally triumph by persuading its opponents and getting them
    to admit their errors, but rather by its opponents gradually dying out and giving way to a new
    generation that is raised on it. … An important scientific innovation rarely makes its way by
    gradually winning over and converting its opponents: it rarely happens that Saul becomes Paul.
    What does happen is that its opponents gradually die out, and that the growing generation is
    familiarized with the ideas from the beginning: another instance of the fact that the future
    lies with the youth.`

const germanTitle = 'Wissenschaftliche Selbstbiographie'
const englishTitle = 'Scientific Autobiography'

export const PlanckQuoteViewer = () => {
    const [language, setLanguage] = React.useState('de')
    const [blur, setBlur] = React.useState(20)

    const handleChangeLanguage = () => {
        setLanguage(language === 'de' ? 'en' : 'de')
    }

    const onChangeBlur = (e) => {
        setBlur(e.target.value)
    }

    return (
        <div className="quotation-background">
            <div className="quotation-background-decoration" />
            <motion.div
                className="quotation-display"
                animate={{ backdropFilter: `blur(${blur}px)` }}
            >
                <button className="change-language" onClick={handleChangeLanguage}>
                    {language === 'de' ? 'English' : 'Deutsch'}
                </button>
                {language === 'de' ? (
                    <>
                        <h1>{germanTitle}</h1>
                        <p>{germanQuotation}</p>
                    </>
                ) : (
                    <>
                        <h1>{englishTitle}</h1>
                        <p>{englishQuotation}</p>
                    </>
                )}
                <p className="author">&mdash; Max Planck</p>
                <input className="blur-control" type="range" id="blur" name="blur" value={blur} onChange={onChangeBlur} min="0" max="20" />
            </motion.div>
        </div>
    )
}

export default PlanckQuoteViewer
