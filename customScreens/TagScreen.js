import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Tag from '../Components/TagButtons';

const image = { uri: 'https://images.unsplash.com/photo-1613742631162-cdba058776b9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D' };

const TagScreen = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagPress = (tagTitle) => {
        if (selectedTags.includes(tagTitle)) {
            setSelectedTags(selectedTags.filter((tag) => tag !== tagTitle));
        } else {
            setSelectedTags(prev => [...prev, tagTitle]);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bg}>
                <Text style={styles.titlu}> Choose your tags </Text>
                <View style={styles.lista}>
                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('eating too much') && styles.pressedButton]}
                        onPress={() => handleTagPress('eating too much')}
                    >
                        <Text style={styles.tagButtonText}>Eating Too Much</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('eating too little') && styles.pressedButton]}
                        onPress={() => handleTagPress('eating too little')}
                    >
                        <Text style={styles.tagButtonText}>Eating Too little</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('skipping meals') && styles.pressedButton]}
                        onPress={() => handleTagPress('skipping meals')}
                    >
                        <Text style={styles.tagButtonText}>skipping meals</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('not enough water') && styles.pressedButton]}
                        onPress={() => handleTagPress('not enough water')}
                    >
                        <Text style={styles.tagButtonText}>not enough water</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('too much caffeine') && styles.pressedButton]}
                        onPress={() => handleTagPress('too much caffeine')}
                    >
                        <Text style={styles.tagButtonText}>too much caffeine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('oversleeping') && styles.pressedButton]}
                        onPress={() => handleTagPress('oversleeping')}
                    >
                        <Text style={styles.tagButtonText}>oversleeping</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('not sleeping enough') && styles.pressedButton]}
                        onPress={() => handleTagPress('not sleeping enough')}
                    >
                        <Text style={styles.tagButtonText}>not sleeping enough</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('drugs') && styles.pressedButton]}
                        onPress={() => handleTagPress('drugs')}
                    >
                        <Text style={styles.tagButtonText}>Drugs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('going to bed late') && styles.pressedButton]}
                        onPress={() => handleTagPress('going to bed late')}
                    >
                        <Text style={styles.tagButtonText}>going to bed late</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('hard to fall asleep') && styles.pressedButton]}
                        onPress={() => handleTagPress('hard to fall asleep')}
                    >
                        <Text style={styles.tagButtonText}>hard to fall asleep</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('procrastinating') && styles.pressedButton]}
                        onPress={() => handleTagPress('procrastinating')}
                    >
                        <Text style={styles.tagButtonText}>Procrastinating</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('multitasking') && styles.pressedButton]}
                        onPress={() => handleTagPress('multitasking')}
                    >
                        <Text style={styles.tagButtonText}>Multitasking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('being late') && styles.pressedButton]}
                        onPress={() => handleTagPress('being late')}
                    >
                        <Text style={styles.tagButtonText}>Being Late</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('bad hygiene') && styles.pressedButton]}
                        onPress={() => handleTagPress('bad hygiene')}
                    >
                        <Text style={styles.tagButtonText}>Bad Hygiene</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('no exercise') && styles.pressedButton]}
                        onPress={() => handleTagPress('no exercise')}
                    >
                        <Text style={styles.tagButtonText}>No Exercise</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('bad posture') && styles.pressedButton]}
                        onPress={() => handleTagPress('bad posture')}
                    >
                        <Text style={styles.tagButtonText}>Bad Posture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('smoking') && styles.pressedButton]}
                        onPress={() => handleTagPress('smoking')}
                    >
                        <Text style={styles.tagButtonText}>Smoking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('alcohol') && styles.pressedButton]}
                        onPress={() => handleTagPress('alcohol')}
                    >
                        <Text style={styles.tagButtonText}>Alcohol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tagButton, selectedTags.includes('porn addiction') && styles.pressedButton]}
                        onPress={() => handleTagPress('porn addiction')}
                    >
                        <Text style={styles.tagButtonText}>Porn Addiction</Text>
                    </TouchableOpacity>



                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => console.log(selectedTags)}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "flex-start",
        padding: '2%'
    },
    titlu: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: '20%',
        marginBottom: '6%',
        color: 'white',
    },
    lista: {
        flexDirection: "row",
        width: '100%',
        flexWrap: "wrap",
    },
    tagButton: {
        backgroundColor: 'black',
        padding: '2%',
        borderRadius: 8,
        margin: '2%',
        width: 'auto',
        height: 'auto',
    },
    pressedButton: {
        backgroundColor: '#864AF9', // Change this color to the pressed color
    },
    tagButtonText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    continueButton: {
        marginTop: 50,
        backgroundColor: '#864AF9',
        padding: 10,
        borderRadius: 5,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
    },
});

export default TagScreen;