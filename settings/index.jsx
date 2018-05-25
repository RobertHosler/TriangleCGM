function mySettings(props) {
  return (
    <Page>
      <TextImageRow
        label="TriangleCagM"
        sublabel="https://github.com/RobertHosler/TriangleCGM"
        icon="https://image.ibb.co/gbWF2H/twerp_bowtie_64.png"
      />
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
        <Select
          label={`Theme`}
          settingsKey="theme"
          options={[
            {name:"Blue Mag"},
            {name:"Classy"},
            {name:"Lime"},
            {name:"Mold"},
            {name:"Mustard"},
            {name:"Neon"},
            {name:"Rose"},
            {name:"Violet"}
          ]}
        />
        <Toggle
          label="12hr | 24hr"
          settingsKey="timeFormat"
        />
    </Page>
  );
}

registerSettingsPage(mySettings);