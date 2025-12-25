import { Box, Slider, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { generatePassword } from "../../lib/Crypto/PasswordGenerator";

interface Props {
  onInsert: (password: string) => void;
}

const PasswordGenerator: FC<Props> = ({ onInsert }) => {
  const { t } = useTranslation();

  const handleSliderChange = (_: Event, value: number | number[]) => {
    const length = value as number;
    const newPassword = generatePassword(length);
    onInsert(newPassword);
  };

  return (
    <Box
      className="password-generator-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 1,
        mb: 1,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
        {t("password_generator.title")}
      </Typography>
      <Box sx={{ width: "450px", maxWidth: "80%", ml: "auto" }}>
        <Slider
          defaultValue={32}
          min={12}
          max={64}
          step={1}
          valueLabelDisplay="auto"
          onChangeCommitted={handleSliderChange}
          size="small"
        />
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
