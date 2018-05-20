function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Demo Settings</Text>}>
        <Toggle
          settingsKey="toggle"
          label="Toggle Switch"
        />
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "tomato"},
            {color: "sandybrown"},
            {color: "#FFD700"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
      </Section>
      <Section>
        <TextInput
          label="Api endpoint"
          settingsKey="endpoint"
        />
        <TextInput
          label="High threshold"
          settingsKey="highThreshold"
        />
        <TextInput
        label="Low threshold"
        settingsKey="lowThreshold"
        />
        <Select
          label={`Glucose Units`}
          settingsKey="units"
          options={[
            {name:"mgdl"},
            {name:"mmol"}
          ]}
        />
        <Toggle
            settingsKey="disableAlert"
            label="Disable Alerts"
          />
        <Toggle
          label="12hr | 24hr"
          settingsKey="timeFormat"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
