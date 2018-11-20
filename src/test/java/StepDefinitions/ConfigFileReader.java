package StepDefinitions;

/**
 * Created by balajakka on 20/11/2018.
 */

import java.io.*;
import java.util.Properties;

    public class ConfigFileReader {

        private Properties prop;
        private final String propertyFilePath= "./src/test/java/StepDefinitions/";

        public ConfigFileReader(){
            InputStream reader = null;
            try {
                reader = new FileInputStream(propertyFilePath+"Config.properties") {
                    @Override
                    public int read() throws IOException {
                        return 0;
                    }
                };
                prop = new Properties();
                try {
                    prop.load(reader);
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            } catch (FileNotFoundException e) {
                e.printStackTrace();
                throw new RuntimeException("Config.properties not found at " + propertyFilePath);
            }
        }

        public String getDriverPath(){
            String driverPath = prop.getProperty("driverPath");
            if(driverPath!= null) return driverPath;
            else throw new RuntimeException("driverPath not specified in the Configuration.properties file.");
        }

        public long getImplicitlyWait() {
            String implicitlyWait = prop.getProperty("implicitlyWait");
            if(implicitlyWait != null) return Long.parseLong(implicitlyWait);
            else throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file.");
        }

        public String getApplicationUrl() {
            String url = prop.getProperty("url");
            if(url != null) return url;
            else throw new RuntimeException("url not specified in the Configuration.properties file.");
        }

    }
